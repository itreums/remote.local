export default{
    name:"Welcome",
    created(){

    },
    template:/*html*/`

    <div class="panel">
        <div class="panel_welcome">
            <div class="welcome_message">
                
                <div class="welcome_message_title">RemoteControl has full time employees that depend on your contributions and support.</div>
                <div class="welcome_message_title welcome_message_subtitle">Please pay as much as you can</div>
            </div>

            <div class="welcome_payment">
                <div class="welcome_payment_cash">
                    <div class="cash_msg">
                        Pay with:
                    </div>
                    <div class="cash_methods">
                        <button class="cash_methods_btn cash_methods_btn__orange">Credit Card</button>
                        <button class="cash_methods_btn cash_methods_btn__blue">PayPal</button>
                    </div>
                </div>
                <div class="welcome_payment_crypto">
                    <div class="crypto_msg">
                        or:
                    </div>
                    <div class="crypto_wallets">
                        <div class="crypto_wallets_row">
                            <div class="crypto_wallets_img">
                                <img src="../assets/img/btc.svg" alt="">
                            </div>
                            <div class="crypto_wallets_address">1212121212</div>
                            <div class="crypto_wallets_btn">
                                <button>
                                    <i class="fa-regular fa-copy"></i>
                                </button>
                            </div>
                        </div>
                        <div class="crypto_wallets_row">
                            <div class="crypto_wallets_img">
                                <img src="../assets/img/eth.svg" alt="">
                            </div>
                            <div class="crypto_wallets_address">0xEdA55392295A030aDc71524EAd8DCb6d305DE90c</div>
                            <div class="crypto_wallets_btn">
                                <button>
                                    <i class="fa-regular fa-copy"></i>
                                </button>
                            </div>
                        </div>
                        <div class="crypto_wallets_row">
                            <div class="crypto_wallets_img">
                                <img src="../assets/img/bnb.svg" alt="">
                            </div>
                            <div class="crypto_wallets_address">1212121212</div>
                            <div class="crypto_wallets_btn">
                                <button>
                                    <i class="fa-regular fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="welcome_contact">
                You can contact us with email rukukulu@mail.ru
            </div>
        </div>
    </div>
    `
}