const navOptions = document.querySelectorAll('.nav-item')
const navBarCollapse = document.querySelector('.navbar-collapse')
const funFact = document.querySelector('.funFact')
const upArrow = document.querySelector('.upArrow')

document.addEventListener('DOMContentLoaded', () =>{

//zamykanie burger menu na mobile
    navOptions.forEach(option => {
    option.addEventListener('click', () => {
        navBarCollapse.classList.remove('show')
    })
});

//Losowa ciekawostka

const facts = ['W SnakePhoto jest zatrudnionych ponad 300 specjalistów!','Wartość sprzętu, który używamy do pracy przekracza 1 000 000 zł!','Najdłuższa sesja ślubna, którą realizowaliśmy trwała 16 tygodni!','Współpracę z nami nawiązywały takie firmy jak: Adidas, Reebok, Supreme czy Lacoste!','Sesje krajobrazowe, które realizowaliśmy na zlecenie m.in. National Geographic zyskały uznanie wśród krytyków na całym świecie!','Ponad połowę naszej kadry pracowniczej zyskaliśmy dzięki programowi stażowemu, który realizowaliśmy w latach 2005-2015','Nasze zdjęcia były wykorzystywane jako okładki takich magazynów jak Forbes czy Vogue!','Nasze social media śledzi ponad 30 000 osób!','SnakePhoto zostało założone przez pasjonata fotografii krajobrazowej w dniu jego dwudziestych urodzin!']

const randomFact = facts[Math.floor(Math.random()*facts.length)];

funFact.textContent = randomFact

//Pojawianie się łapki do przewijania strony
document.addEventListener('scroll', () => {

    if(window.innerWidth < 400){
         return
    }else{

        if(window.scrollY > 1130){
            upArrow.classList.remove('displayNone')
        }else if(window.scrollY < 1130){
            upArrow.classList.add('displayNone')
        }
    }
})
})

