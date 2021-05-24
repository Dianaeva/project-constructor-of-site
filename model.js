import image from './assets/sun.png'
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

const textValue = `
I was wondering if you'd like to try <i>CSS</i> out? &#128521; <br>
    It's my simple project which enables you to create new blocks on this site. All you need is to find the left sidebar and fill in the gaps. <br>  
`
const column1 = `
<span style="color:green; font-size: 22px">//There's quotes for copying:</span>
<ul>
<li>“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison</li>
<li>“You only live once, but if you do it right, once is enough.” — Mae West</li>
<li>“The purpose of our lives is to be happy.” — Dalai Lama</li>
<li>“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs</li>
<li>“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.”</li>
</ul>
`
const column2 = `
<span style="color:green; font-size: 22px">//Try some code!</span> <br>
font-family: 'Kaushan Script', cursive; <br>
font-size: 22px; <br>
background-color: black; <br>
color: white; <br>
text-align: center; <br>
border-radius: 2px; <br>
border-color: azure; <br>
border-style: solid; <br>
border-width: 1px; <br>
padding: 10px; <br>
box-shadow: 4px 4px 10px rgba(255,255,255,0.5) <br>
`
const column3 = `
<span style="color:green; font-size: 22px">//Click the button <em>Add<em/> and look!</span>
`
export const model = [
    new TitleBlock('The Constructor of websites with JavaScript', {
        tag: 'h2',
        styles: {
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
            'font-family': `'Montserrat', sans-serif`
        }
    }),

    new TextBlock(textValue, {
        styles: {
            color: 'white',
            padding: '1rem',
            'font-weight': 'bold',
            'font-family': `'Montserrat', sans-serif`
        }
    }),

   new ColumnsBlock([
    column1,
    column2,
    column3
    ], 
    {
        styles: {
            // 'background-color': 'rgb(43, 43, 43)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
            'font-family': `'Courier New', Courier, monospace`
            }
    }),

    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '300px',
            height: 'auto'
        },
        alt: 'Image',
    }),

];