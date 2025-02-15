# Angular Template Builder with Drag and Drop
This project is an Angular web application that allows users to build templates by dragging and dropping different section types. Changes are saved to local storage so the template persists across page reloads.

# Prerequisites
## Make sure you have the following installed:
1. Node.js (v14 or higher recommended)
2. Angular CLI (npm install -g @angular/cli@15)

# Installation
1. Clone the repository:
* git clone https://github.com/LanaAlrayes/dragDrop
* cd angular-template-builder
2. Install dependencies:
* npm install
3. Running the Application Development server:
* ng serve 
* Navigate to `http://localhost:4200/` in your browser .The application will automatically reload if you change any of the source files.

# Setup
- Use Angular framework.
- Use Angular Material and CDK (Component Dev Kit) for UI components and drag-and-drop functionality.

# Features
- Drag and drop interface for rearranging sections.
- Three types of sections: text, textarea, image, video, and email.
- Add new sections of any type.
- Delete existing sections.
- Automatic saving to local storage.
- Loading from local storage on page reload.

# Troubleshooting
## If you encounter issues:
- Ensure all prerequisites are correctly installed.
- Check that you're using compatible versions of Angular and Angular Material.
- Clear your browser's local storage if you see unexpected behavior.
- Check the browser console for error messages.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
