function support(app) {
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Support';
    app.search.input.style.display = 'none';
    app.main.support = app.createElement(
        'div', 
        [
            app.createElement('section', [
                app.createElement('span', 'A page is not functioning or loading on the proxy', {
                    style: {
                        display: 'block',
                        'margin-bottom': '6px',
                        'font-size': '18px',
                        'font-weight': '500'
                    }
                }),
                app.createElement('p', 'Our web servers are either under really high load, or the web page you tried accessing is not currently supported.', {
                    style: {
                        'margin-bottom': '0'
                    }
                })
            ], {
                class: 'data-section'
            }),
            app.createElement('section', [
                app.createElement('span', 'Is my information secure', {
                    style: {
                        display: 'block',
                        'margin-bottom': '6px',
                        'font-size': '18px',
                        'font-weight': '500'
                    }
                }),
                app.createElement('p', 'Yes, your informaton is as secure as the sites visiting them. Our SSL encryption ensures even more that it is secure.', {
                    style: {
                        'margin-bottom': '0'
                    }
                })
            ], {
                class: 'data-section'
            }),
            app.createElement('section', [
                app.createElement('span', 'Where can I obtain more links to Incognito', {
                    style: {
                        display: 'block',
                        'margin-bottom': '6px',
                        'font-size': '18px',
                        'font-weight': '500'
                    }
                }),
                app.createElement('p', 'Links to Incognito can be generated at <a href="https://discord.gg/unblock">Titanium Network</a>', {
                    style: {
                        'margin-bottom': '0'
                    }
                })
            ], {
                class: 'data-section'
            })
        ]);
        app.search.back.style.display = 'inline';
    app.search.back.setAttribute(
        'onclick',
        '(' + (function(){
            window.location.hash = '';
        }).toString() + ')();'
    )
};

export { support };