<?php

$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
if($lang=="ru"||$_GET['lang']=="ru"){
    $text=include './lang/about/ru.php';
}else{
    $text=include './lang/about/en.php';
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://kit.fontawesome.com/75e42854e2.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/bootstrap-grid.rtl.css">
    <link rel="stylesheet" href="../css/about.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>
    <style>
    </style>
</head>

<body>
        <div class="seman">
            <h1>Удаленое управление компьютером.Remote Control PC.</h1>
        </div>
        <div class="container-fluid">
            <div class="header_wrap">
                <div class="container">
                    <div class="header row justify-content-between">
                        <div class="header_logo d-flex col-auto col-md-auto col-lg-4">
                            <div class="header_logo_img">
                                <img src="../assets/img/logo.svg" alt="">
                            </div>
                            <div class="header_logo_name">
                                <a href="../about.php<?php echo '?lang='.$_GET['lang']?>" class=""><span class="bold">Remote</span>Control</a>
                            </div>
                        </div>
                        <div class="wrap_btn_menu col-auto d-none">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div class="header_menu  d-none col-12 col-md-auto col-lg-8 d-md-flex">
                                <div id="platform" class="menu_item">
                                    <?php echo $text['platform']?>
                                    <div class="hide_menu d-none">
                                        <a href="">Google Chrome</a>
                                    </div>
                                </div>
                                <div class="menu_item">
                                    <a href="../about.php<?php echo '?lang='.$_GET['lang']?>#channels">
                                        <?php echo $text['channels']?>
                                    </a>
                                </div>
                                <div class="menu_item">
                                    <a href="../about.php<?php echo '?lang='.$_GET['lang']?>#support">
                                        <?php echo $text['support']?>
                                    </a>
                                </div>
                                <div id="app_link" class="menu_item">
                                    <a href="../">RemApp</a>
                                </div>
                                <div class="menu_item">
                                    <a href="../donation.php<?php echo '?lang='.$_GET['lang']?>">
                                        <?php echo $text['donate']?>
                                    </a>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="main row ">
                <div class="main_preview ">
                    <div class="container">
                        <div class="row justify-content-center flex-column align-items-center">
                            
                            <div class="banner col-8 col-sm-6 col-md-4 col-lg-3">
                                <img src="../assets/img/donate.svg" alt="">
                            </div>
                            <div class="title col-12 col-md-8">
                            <?php echo $text['donate_title']?>
                            </div>
                            <div class="action_btn_wrap">
                                <button class="action_btn">
                                    Credit Card
                                </button>
                                <button class="action_btn action_btn_blue">
                                    Paypal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="crypto_wallets">
                    <div class="container">
                        <div class="row">
                            <div class="wallet_wrap d-flex justify-content-center">
                                <div class="wallet d-flex justify-content-center align-items-center">
                                    <div class="wallet_icon">
                                        <img src="../assets/img/btc.svg" alt="">
                                        <span class="wallet_name">BTC</span>
                                    </div>
                                    <div class="wallet_address">
                                    0xea674fdde714fd979de3edf0f56aa9716b898ec8
                                    </div>
                                    <div class="wallet_btn">
                                        <i class="fa-regular fa-copy"></i>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="wallet_wrap d-flex justify-content-center">
                                <div class="wallet d-flex justify-content-center align-items-center">
                                    <div class="wallet_icon">
                                        <img src="../assets/img/eth.svg" alt="">
                                        <span class="wallet_name">ETH</span>
                                    </div>
                                    <div class="wallet_address">
                                    0xea674fdde714fd979de3edf0f56aa9716b898ec8
                                    </div>
                                    <div class="wallet_btn">
                                        <i class="fa-regular fa-copy"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="wallet_wrap d-flex justify-content-center">
                                <div class="wallet d-flex justify-content-center align-items-center">
                                    <div class="wallet_icon">
                                        <img src="../assets/img/bnb.svg" alt="">
                                        <span class="wallet_name">BNB</span>
                                    </div>
                                    <div class="wallet_address">
                                    0xea674fdde714fd979de3edf0f56aa9716b898ec8
                                    </div>
                                    <div class="wallet_btn">
                                        <i class="fa-regular fa-copy"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact" class="main_contact">
                    <div class="contact_wrap">
                        
                        <span class="line contact_wrap_title">
                            <?php echo $text['contact_msg1']?>
                            <a href = "mailto: rukukulu@mail.ru">
                                <?php echo $text['contact_msg2']?>
                            </a>
                        </span>
                        <span class="line">rukukulu@mail.ru</span>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="container">
                    <div class="footer_menu">
                        <div class="footer_menu_politics">
                            All right reserver 2022
                        </div>
                        
                        <div id="english_link" class="footer_menu_language d-flex">
                            
                            <div class="lang_btn">
                               <? if($_GET['lang']=="ru"){
                                    echo "Русский";
                                } else{
                                    echo "English";
                                }
                                ?>
                            </div>

                            <div class="lang_panel d-flex d-none">
                                <div id="en" class="lang">
                                    <a href="?lang=en">English</a>
                                </div>
                                
                                
                                
                                <div id="ru" class=" snd_lang lang">
                                    <a href="?lang=ru">Русский</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>


<script src="../js/about.js"></script>
</body>