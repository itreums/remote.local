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
                                    <a href="#channels"><?php echo $text['channels']?></a>
                                </div>
                                <div class="menu_item">
                                    <a href="#support"><?php echo $text['support']?></a>
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
                        <div class="row justify-content-center">
                            <div class="title col-12 col-lg-8">
                                <?php echo $text['title']?>
                            </div>
                            <div class="banner col-12 col-sm-12 col-md-10 col-lg-8">
                                <img src="../assets/img/remote_control.svg" alt="">
                            </div>
                            
                            <div class="action_btn_wrap">
                                <button id="ext_chrome" class="action_btn">
                                    <?php echo $text['action_btn']?>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main_platforms ">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="platforms col-12 col-sm-10 d-flex">
                                <div class="platforms_active">
                                    <div class="platform">
                                        <div class="platform_img">
                                            <img src="../assets/img/chrome.svg" alt="">
                                        </div>
                                        <div class="platform_name">
                                            Chrome
                                        </div>
                                    </div>
                                </div>
                                <div class="platforms_noactive f-gray">
                                    <div class="platform">
                                        <div class="platform_img">
                                            <img src="../assets/img/yandex-browser.svg" alt="">
                                        </div>
                                        <div class="platform_name">
                                            Yandex
                                        </div>
                                    </div>
                                    <div class="platform">
                                        <div class="platform_img">
                                            <img src="../assets/img/microsoft-edge.svg" alt="">
                                        </div>
                                        <div class="platform_name">
                                            Edge
                                        </div>
                                    </div>
                                    <div class="platform">
                                        <div class="platform_img">
                                            <img src="../assets/img/opera.svg" alt="">
                                        </div>
                                        <div class="platform_name">
                                            Opera
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main_about ">
                    <div class="about_card_wrap container">
                        <div class="row row-cols-1 row-cols-md-3">
                            <div class="col">
                                <div class="card">
                                    <div class="card_icon">
                                        <i class="fa-solid fa-computer"></i>
                                    </div>
                                    <div class="card_title">
                                        <?php echo $text['card_one_title']?>
                                    </div>
                                    <div class="card_text">
                                        <?php echo $text['card_one_text']?>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card_icon">
                                    <i class="fa-solid fa-couch"></i>
                                    </div>
                                    <div class="card_title">
                                    <?php echo $text['card_2_title']?>
                                    </div>
                                    <div class="card_text">
                                    <?php echo $text['card_2_text']?>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card_icon">
                                        <i class="fa-solid fa-mobile-retro"></i>
                                    </div>
                                    <div class="card_title">
                                    <?php echo $text['card_3_title']?>
                                    </div>
                                    <div class="card_text">
                                    <?php echo $text['card_3_text']?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="channels" class="main_channels ">
                    <div class="channels_wrap container">
                        <div class="row row row-cols-1">
                            <div class="col">
                                <div class="channels_title">
                                    <?php echo $text['channels']?>
                                </div>
                                <div class="channels_app_wrap d-flex flex-wrap justify-content-center">
                                    <div class="channels_app">
                                        <div class="channels_logo">
                                            <img src="../assets/img/youtube.svg" alt="">
                                        </div>
                                        <div class="channels_name">
                                            YouTube
                                        </div>
                                    </div>
                                    <div class="channels_app">
                                        <div class="channels_logo">
                                            <img src="../assets/img/tiktok.svg" alt="">
                                        </div>
                                        <div class="channels_name">
                                            TikTok
                                        </div>
                                    </div>
                                    <div class="channels_app">
                                        <div class="channels_logo">
                                            <img src="../assets/img/yandex-music.svg" alt="">
                                        </div>
                                        <div class="channels_name">
                                            YandexMusic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col f-gray">
                                <div class="channels_title">
                                    <?php echo $text['channels_title']?>
                                </div>
                                <div class="channels_app_wrap d-flex flex-wrap justify-content-center">
                                    <div class="channels_app">
                                        <div class="channels_logo">
                                            <img src="../assets/img/youtube-short.svg" alt="">
                                        </div>
                                        <div class="channels_name">
                                            YouTube Shorts
                                        </div>
                                    </div>
                                    <div class="channels_app">
                                        <div class="channels_logo">
                                            <img src="../assets/img/vk_clips.svg" alt="">
                                        </div>
                                        <div class="channels_name">
                                            VK Clips
                                        </div>
                                    </div>
                                    <div class="channels_app">
                                        <div class="channels_logo">
                                            <img src="../assets/img/vk_video.svg" alt="">
                                        </div>
                                        <div class="channels_name">
                                            VK Video
                                        </div>
                                    </div>
                                    <div class="channels_app">
                                        <div class="channels_logo">
                                            <img src="../assets/img/vk_music.svg" alt="">
                                        </div>
                                        <div class="channels_name">
                                            VK Music
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="support" class="main_support ">
                    <div class="support_wrap container">
                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                            <div class="support_text">
                                <div class="support_text_title">
                                    <?php echo $text['support_title']?>
                                </div>
                                <div class="support_text_about">
                                    <span class="line">
                                        <?php echo $text['support_msg1']?>
                                    </span>
                                    <span class="line">
                                        <?php echo $text['support_msg2']?> <a  class="bold orange" href = "">RemApp</a>
                                    </span>
                                    <span class="line">
                                        <?php echo $text['support_msg3']?> 
                                    </span>
                                    <span class="line">
                                        <?php echo $text['support_msg4']?>
                                    </span>
                                    <span class="line">
                                        <?php echo $text['support_msg5']?>
                                    </span>
                                </div>
                            </div>
                            <div class="support_video">
                                <img src="../assets/img/lowbanner.png" alt="">
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
</html>