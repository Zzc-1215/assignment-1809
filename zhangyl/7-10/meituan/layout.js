Vue.component('layout',{
    template: `
        <div class='bgbox'>
            <header class='head'>
                <slot name='header'></slot>
            </header>
            <div class='contentbox'>
                <slot></slot>
            </div>
            <footer class='foot'>
                 <slot name='footer'></slot>
            </footer>
        </div>
    
    `
})