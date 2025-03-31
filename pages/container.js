import { add_html_element, add_css , Add_to_DOM } from './GetFunctions.js';



const heart = add_html_element(
    {
        tag: 'div',
        attributes: {
            id: 'heart',
            class: 'heart'
        },
        children: '❤️'
    }
)



add_css(
    {
        selector: '#heart',
        css: {
            fontSize: '25px',
            color: 'red',
            animation: 'heartBeat 1s infinite',
            transformOrigin: 'center',
            transform: 'scale(1.1)',
            animationTimingFunction: 'ease-in-out'

        }
    }
)



const card_mb_3 = add_html_element(
    {
        tag: 'div',
        attributes: {
            class: 'card mb-3',
            style: 'margin-left: 15px;margin-right: 15px;width::80%'
        }
    }
)
Add_to_DOM({
    element: card_mb_3,
    parent: 'main',
})

const card_img_top = add_html_element({
    tag: 'img',
    attributes: {
        class: 'card-img-top',
        src: '/img/ChatGPT Image 31 mars 2025, 02_30_32.png',
        alt: 'Card image cap',
        style: 'height:250px;object-fit:contain;cursor:pointer',
        loading: 'lazy',
        onclick: 'reverse()'
    }
})

Add_to_DOM({
    element: card_img_top,
    parent: '.mb-3',
})

const card_body = add_html_element(
    {
        tag: 'div',
        attributes: {
            class: 'card-body'
        }
    }
)

Add_to_DOM({
    element: card_body,
    parent: '.mb-3',
})

const card_title = add_html_element(
    {
        tag: 'h5',
        attributes: {
            class: 'card-title',
            id: 'card-title'
        }
        ,children : heart 
    }
)

Add_to_DOM({
    element: card_title,
    parent: '.card-body',
})

const card_text1 = add_html_element(
    {
        tag: 'p',
        attributes: {
            class: 'card-text',
            id: 'card-text'
        },
        children : ''
    }
)

Add_to_DOM({
    element: card_text1,
    parent: '.card-body',
})

const text_body_secondary = add_html_element(
    {
        tag: 'small',
        attributes: {
            class: 'text-body-secondary'
        },
        children : 'Last updated 3 mins ago'
    }
)

const card_text2 = add_html_element(
    {
        tag: 'p',
        attributes: {
            class: 'card-text',
            id: 'card-text'
        },
        children : text_body_secondary,
    }
)
Add_to_DOM({
    element: card_text2,
    parent: '.card-body',
})
var res1  = (`Depuis le ${days_given}/${months_given}/${years_given},il s'est écoulé ${diffGiven.years} ans, ${diffGiven.months} mois  ${diffGiven.days} jours.`);
document.querySelector(".card-text").innerHTML = res1;

document.querySelector(".text-body-secondary").innerHTML = `Le site a été créé il y a ${diffCreated.years} ans, ${diffCreated.months} mois et ${diffCreated.days} jours.`