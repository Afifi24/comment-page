import  {createGlobalStyle} from 'styled-components'

const Globalstyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

:root{
--container-width-lg:50%;
--container-width-md:70%;
--container-width-sm:100%;
--color-Red: hsl(1, 90%, 64%);
--color-Blue: hsl(219, 85%, 26%);
--color-White: hsl(0, 0%, 100%);
--color-Very-light-grayish-blue: hsl(210, 60%, 98%);
--color-Light-grayish-blue-1: hsl(211, 68%, 94%);
--color-Light-grayish-blue-2: hsl(205, 33%, 90%);
--color-Grayish-blue: hsl(219, 14%, 63%);
--color-Dark-grayish-blue: hsl(219, 12%, 42%);
--color-Very-dark-blue: hsl(224, 21%, 14%);
}
body{
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color:var(--color-Very-light-grayish-blue);
}

`
export default Globalstyle