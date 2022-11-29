const downArrow = document.querySelector('.down-arrow ')
const animatedDescribeElement = [...document.querySelectorAll('.animated-describe')]
const burgerMenuButton = document.querySelector('.burger-left')
const contentWrapper = document.querySelector('.content-wrapper')
const mainMenuElement = document.querySelector('.main-menu-element')
const menuWrapper = document.querySelector('.menu-wrapper')
const envelopeMenuElement = document.querySelector('.envelope')
const contactELement = document.querySelector('.contact')
const sendMessageButton = document.querySelector('.send-message')
const headerWrapper = document.querySelector('.header-wrapper')
const body = document.querySelector('.body')




const smallMenuElements = document.querySelectorAll('.menu-element-small')


// ============= DESCRIPTION ELEMENTS ANIMATION ==============

const describePosition = []

for (let i = 0; i < animatedDescribeElement.length; i++) {
    describePositionArrElement = animatedDescribeElement[i].scrollHeight + window.innerHeight
    describePosition.push(describePositionArrElement)

}

window.addEventListener('scroll', (e) => {

    for (let i = 0; i < animatedDescribeElement.length; i++) {
        if (animatedDescribeElement[i].getBoundingClientRect().bottom < (describePosition[i] - 100)) {
            animatedDescribeElement[i].classList.add('describe-transition')

        }
    }
})

// ============= MENU ==============

// =============  animation menu elements after click on burger ==============

function showSmallMenuElements() {
    for (let i = 0; i < smallMenuElements.length; i++) {
        smallMenuElements[i].classList.toggle('hidden')
    }
}

function addClassesToMenuElements() {
    menuAnimationClassesToAdd = ['menu-animation-top-element', 'menu-animation-left-element', 'menu-animation-right-element']
    for (let i = 0; i < smallMenuElements.length; i++) {
        smallMenuElements[i].classList.add(menuAnimationClassesToAdd[i])
    }
}

function toggleMenuElements() {
    if (!menuWrapper.classList.contains('close-menu-after-envelope-clicked')) {

        headerWrapper.classList.toggle('blur')
        contentWrapper.classList.toggle('blur')
    }

    if (window.innerWidth > 767) {
        menuWrapper.classList.toggle('menu-animation')
        for (let i = 0; i < smallMenuElements.length; i++) {
            smallMenuElements[i].classList.remove('hidden')
        }
    }


    if (window.innerWidth < 768) {
        mainMenuElement.classList.toggle('menu-animation')
        menuWrapper.classList.toggle('hidden')

    }


}

burgerMenuButton.addEventListener('click', () => {

    if (window.innerWidth < 768) {
        addClassesToMenuElements()
    }

    toggleMenuElements()
    burgerMenuButton.style.pointerEvents = "none"

    if (window.innerWidth < 768) {
        setTimeout(showSmallMenuElements, 500)
    }




})

mainMenuElement.addEventListener('click', () => {
    toggleMenuElements()
    showSmallMenuElements()
    burgerMenuButton.style.pointerEvents = ""
})


// ============= contact form animation after click on envelope ==============

function resetMenuElementsAfterClose() {
    menuWrapper.classList.remove('close-menu-after-envelope-clicked')
}


function showContactForm() {



    menuWrapper.classList.add('close-menu-after-envelope-clicked')
    contactELement.classList.add('contact-form-animation')
    contentWrapper.classList.add('blur')
    contactELement.classList.remove('hidden')
    setTimeout(toggleMenuElements, 500)
    setTimeout(showSmallMenuElements, 500)
    setTimeout(resetMenuElementsAfterClose, 500)

}

envelopeMenuElement.addEventListener('click', showContactForm)


// ============= events after sending message ==============


function sendMessageFrontendEvents() {

    contactELement.classList.remove('contact-form-animation')
    contactELement.classList.add('hidden')
    headerWrapper.classList.remove('blur')
    contentWrapper.classList.remove('blur')
    burgerMenuButton.style.pointerEvents = ""
}

sendMessageButton.addEventListener('click', sendMessageFrontendEvents)







// ============== portfolio section ============


let activeProjectElement = 0


const projectButtonsArray = [...document.querySelectorAll('.project_button')]
const projectElementsArray = [...document.querySelectorAll('.project_element')]
const projectElementBottomArray = [...document.querySelectorAll('.project-element__bottom')]




projectButtonsArray.forEach((item, index) => {


    item.addEventListener('click', () => {

        console.log('active el: ', activeProjectElement)
        for (let i = 0; i < projectButtonsArray.length; i++) {
            projectButtonsArray[i].classList.remove('active-project_button')
            projectButtonsArray[i].classList.remove('project-button-animation')
                // projectElementsArray[i].classList.add('hidden')

        }
        item.classList.add('active-project_button')
        item.classList.add('project-button-animation')

        // projectElementsArray[index].classList.remove('hidden')
        if (activeProjectElement != index) {
            setTimeout(() => {
                projectElementsArray[0].classList.remove('active-project-element')
                projectElementBottomArray[0].classList.remove('active-project-element__bottom')
            }, 600)


            projectElementsArray[activeProjectElement].classList.add('project_element_disappear')
            projectElementBottomArray[activeProjectElement].classList.add('project_element_bottom_disappear')

            projectElementsArray[activeProjectElement].classList.remove('project_element_appear')
            projectElementBottomArray[activeProjectElement].classList.remove('project_element_bottom_appear')

            projectElementsArray[index].classList.add('project_element_appear')
            projectElementBottomArray[index].classList.add('project_element_bottom_appear')
                // projectElementsArray[index].classList.remove('hidden')


            activeProjectElement = index
            projectElementBottomArray[activeProjectElement].classList.remove('project_element_bottom_disappear')
        }


    })
})