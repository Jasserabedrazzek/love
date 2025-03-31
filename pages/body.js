import { add_html_element, add_css , Add_to_DOM } from './GetFunctions.js';

const main = add_html_element(
    {
        tag: 'main',
        attributes: {
            id: 'main',
            class: 'main'
        }
    }
)

add_css(
    {
        selector: '*',
        css: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        }
    }
)
add_css(
    {
        selector:'body',
        css: {
            height: '100vh',
            backgroundColor: 'pink'
        }
    }
)
Add_to_DOM(
    {
        parent: 'body',
        element: main
    }
)

add_css(
    {
        selector: '#main',
        css: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }
    }
)

