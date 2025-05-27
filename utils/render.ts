//NOTE - render function
export function render (component: HTMLElement) {
    // finding the app element
    const app = document.getElementById('app');

    if (app) {
        // clearing the app element
        app.innerHTML = '';
        // appending the new component
        app.appendChild(component);
    }
}