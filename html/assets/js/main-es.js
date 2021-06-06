window.onload = function() {  
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        if (support == true) {
        document.querySelector('body').classList.add('webp');
        }else{
        document.querySelector('body').classList.add('no-webp');
        }
        });

//==================== lang

    let languagesBtn = document.querySelector('.languages-ctn');
    languagesBtn.addEventListener('click', function(){
        languagesBtn.classList.toggle('kMkdbX');
        languagesBtn.classList.toggle('open');
    });

//==================== sound btn
    let sndBtn = document.querySelector('.snd-btn');
    sndBtn.addEventListener('click', function(){
        sndBtn.classList.toggle('muted');
        bgSound.toggleMute();
        actionSound.toggleMute();
    });

//==================== step-1
    let firstBtn = document.querySelector('.btn-first');
    let step1 = document.querySelector('.step-1');
    let step2 = document.querySelector('.step-2');

    ////////==================== bg sound
    var bgSound = new buzz.sound("../assets/media/bg1", {
        formats: ["aac"],
        preload: true,
        autoplay: false,
        preload: true,
        loop: true
    });

    var actionSound = new buzz.sound("../assets/media/es-intro", {
        formats: ["aac"],
        preload: true,
        autoplay: false,
        preload: true,
        loop: false
    });

    function stopSound(){
        actionSound.stop();
    }

    firstBtn.addEventListener('click', function(){
        bgSound.play();
        actionSound.play();
        actionSound.setTime(10);
        bgSound.setVolume(50);
        setTimeout(stopSound, 3500);
        step1.classList.add('d-none');
        step2.classList.remove('d-none');
        
    });

//==================== step-2

    let secondBtns = document.querySelectorAll('.btn-2--2');
    let bgVideo = document.getElementById('bg-video');
    let langBtn = document.querySelector('.languages-ctn');
    let step3 = document.querySelector('.step-3');

    for (let i = 0; i < secondBtns.length; i++) {
        const secondBtn = secondBtns[i];

        secondBtn.addEventListener('click', function(){
            // actionSound.stop();
            actionSound.play();
            actionSound.setTime(13.5);
            setTimeout(stopSound, 4000);

            step2.classList.add('d-none');
            langBtn.classList.add('d-none');
            bgVideo.classList.remove('d-none');
            step3.classList.remove('d-none');
        });
    }
//==================== step-3 step-4
    let thirdBtn = document.getElementById('btn-3');
    let step4 = document.querySelector('.step-4');
    let step5 = document.querySelector('.step-5');

    thirdBtn.addEventListener('click', function(){
        step3.classList.add('d-none');
        step4.classList.remove('d-none');
        bgVideo.classList.add('d-none');
        function counter(ms, className){
            let counter = 0;
            let interval = setInterval(() => {
                document.querySelector(className).innerHTML = ++counter + "%";
                counter === 100 ? clearInterval(interval) : false;
            }, ms)
        }
        counter(23, '.value');
        setTimeout(function(){
            step4.classList.add('d-none');
            bgVideo.classList.remove('d-none');
            step5.classList.remove('d-none');
        }, 3000);
    });

//==================== step-5 step-6
let fifthBtn = document.getElementById('btn-5');
let step6 = document.querySelector('.step-6');

fifthBtn.addEventListener('click', function(){
    step5.classList.add('d-none');
    step6.classList.remove('d-none');
    actionSound.play();
    actionSound.setTime(17);
    setTimeout(stopSound, 13000);
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
        initialSlide: 3,
        centeredSlides: true,
      });
});

// ========================= main modal
let modal = document.getElementById('mainModal');
let mainModalBack = document.getElementById('mainModalBack');
let modalBtns = document.querySelectorAll('.disabled, .meter-ctn, .camera-ctn, .pan-svg, .intensity-slider, .zoom-ctn, .snapshot-ctrl');

mainModalBack.addEventListener('click', function(){
        modal.classList.add('d-none');
    });

    for (let i = 0; i < modalBtns.length; i++) {
        const modalBtn = modalBtns[i];
        modalBtn.addEventListener('click', function(){
            modal.classList.remove('d-none');
        });
    }

    // ========================= character modal
    let characterBtn = document.getElementById('characterBtn');
    let bgBtn = document.getElementById('bgBtn');

    let characterModal = document.getElementById('characterModal');
    let characterModalBack = document.getElementById('characterModalBack');
    let bgModal = document.getElementById('bgModal');

    characterModalBack.addEventListener('click', function(){
        characterModal.classList.add('d-none');
    });
    characterBtn.addEventListener('click', function(){
        characterModal.classList.remove('d-none');
    });
    //================================ bg-modal
    bgBtn.addEventListener('click', function(){
        bgModal.classList.remove('d-none');
    });
    bgModalBack.addEventListener('click', function(){
        bgModal.classList.add('d-none');
    });

// more btn
    let moreBtns = document.querySelectorAll('.more-btn, .link-more');

    for (let i = 0; i < moreBtns.length; i++) {
        const moreBtn = moreBtns[i];
        moreBtn.addEventListener('click', (event) => { 
            let target = event.target; 
    
            target.closest('.modal-dark').classList.add('d-none');
            modal.classList.remove('d-none');
        });
    }

  //===============================  form modal
  let continueBtn = document.querySelector('.btn-continue');
  let formModal = document.getElementById('formModal');
  let createProfileBtn = document.getElementById('createProfile');

  continueBtn.addEventListener('click', (event) => { 
    let target = event.target; 
        actionSound.play();
        actionSound.setTime(30);
        target.closest('.modal-dark').classList.add('d-none');
        formModal.classList.remove('d-none');
    });

    createProfileBtn.addEventListener('click', (event) => {
        actionSound.play();
        actionSound.setTime(30);
        formModal.classList.remove('d-none');
    });
    
///================================= выбор аватара и подгрузка видео
//======line1

        var line1 = document.querySelectorAll('#list-portrait1 > li');
        let avatarsImgs = document.querySelectorAll('.portrait-li > img');

        for (var i = 0; i < line1.length; i++) {
            line1[i].classList.remove('selected');
            line1[i].onclick = function (event) {
                //remove all active class
                removeClass1();
                if (event.target.closest('li').innerHTML === this.innerHTML) {
                    this.classList.add("selected");
                }

                // ======== insert ava images
                for (let i = 0; i < avatarsImgs.length; i++) {
                    if (line1[0].classList.contains('selected')){
                        avatarsImgs[3].setAttribute('src', '../assets/img/ava/caucasian-red.jpg');
                        avatarsImgs[4].setAttribute('src', '../assets/img/ava/caucasian-blond.jpg');
                        avatarsImgs[5].setAttribute('src', '../assets/img/ava/caucasian-black.jpg');

                        avatarsImgs[6].setAttribute('src', '../assets/img/ava/caucasian-boobs-small.jpg');
                        avatarsImgs[7].setAttribute('src', '../assets/img/ava/caucasian-boobs-medium.jpg');
                        avatarsImgs[8].setAttribute('src', '../assets/img/ava/caucasian-boobs-big.jpg');
                    }else if (line1[1].classList.contains('selected')){
                        avatarsImgs[3].setAttribute('src', '../assets/img/ava/black-red.jpg');
                        avatarsImgs[4].setAttribute('src', '../assets/img/ava/black-blond.jpg');
                        avatarsImgs[5].setAttribute('src', '../assets/img/ava/black-black.jpg');

                        avatarsImgs[6].setAttribute('src', '../assets/img/ava/black-boobs-small.jpg');
                        avatarsImgs[7].setAttribute('src', '../assets/img/ava/black-boobs-medium.jpg');
                        avatarsImgs[8].setAttribute('src', '../assets/img/ava/black-boobs-big.jpg');
                    }else if (line1[2].classList.contains('selected')){
                        avatarsImgs[3].setAttribute('src', '../assets/img/ava/asian-red.jpg');
                        avatarsImgs[4].setAttribute('src', '../assets/img/ava/asian-blond.jpg');
                        avatarsImgs[5].setAttribute('src', '../assets/img/ava/asian-black.jpg');

                        avatarsImgs[6].setAttribute('src', '../assets/img/ava/asian-boobs-small.jpg');
                        avatarsImgs[7].setAttribute('src', '../assets/img/ava/asian-boobs-medium.jpg');
                        avatarsImgs[8].setAttribute('src', '../assets/img/ava/asian-boobs-big.jpg');
                    }
                }
            }
        }
        function removeClass1(){
            for (var i = 0; i < line1.length; i++) {
                line1[i].classList.remove('selected');
            }
        }
//======line2

    var line2 = document.querySelectorAll('#list-portrait2 > li');

        for (var i = 0; i < line2.length; i++) {
            line2[i].classList.remove('selected');
            line2[i].onclick = function (event) {
                //remove all active class
                removeClass2();
                if (event.target.closest('li').innerHTML === this.innerHTML) {
                    this.classList.add("selected");
                }
            }
        }
        function removeClass2(){
            for (var i = 0; i < line2.length; i++) {
                line2[i].classList.remove('selected');
            }
        }

//======line3

    var line3 = document.querySelectorAll('#list-portrait3 > li');

    for (var i = 0; i < line3.length; i++) {
        line3[i].classList.remove('selected');
        line3[i].onclick = function (event) {
            //remove all active class
            removeClass3();
            if (event.target.closest('li').innerHTML === this.innerHTML) {
                this.classList.add("selected");
            }
        }
    }
    function removeClass3(){
        for (var i = 0; i < line3.length; i++) {
            line3[i].classList.remove('selected');
        }
    }

    // ======== insert video
    let avatarsImgLi = document.querySelectorAll('.portrait-li');
    let mainVideo = document.getElementById('mainVideo');

    for (let i = 0; i < avatarsImgLi.length; i++) {
        avatarsImgLi[i].addEventListener('click', () => {
            if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-red-small.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-red-medium.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-red-big.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-blond-small.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-blond-medium.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-blond-big.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-black-small.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-black-medium.mp4');
            }else if (avatarsImgLi[0].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/caucasian-black-big.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-red-small.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-red-medium.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-red-big.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-blond-small.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-blond-medium.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-blond-big.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-black-small.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-black-medium.mp4');
            }else if (avatarsImgLi[1].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/black-black-big.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-red-small.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-red-medium.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[3].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-red-big.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-blond-small.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-blond-medium.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[4].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-blond-big.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[6].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-black-small.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[7].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-black-medium.mp4');
            }else if (avatarsImgLi[2].classList.contains('selected') && avatarsImgLi[5].classList.contains('selected') && avatarsImgLi[8].classList.contains('selected')){
                mainVideo.setAttribute('src', '../../video/bg/asian-black-big.mp4');
            }
        });
    }

}