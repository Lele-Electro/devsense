# Copilot Instructions for the Portfolio Project

## Overview
This project is a personal website built using Angular. It is designed to introduce the developer and showcase their work. The architecture is modular, with components organized by feature, making it easy to navigate and maintain.

## Architecture
- **Components**: The main application components are located in the `src/app/components/` directory. Each feature has its own folder, such as `home`, `archive`, and `general`, which contain their respective components.
- **Services**: Shared logic and data handling are managed through services located in `src/app/services/`. For example, `wordpress.service.ts` handles interactions with a WordPress backend.
- **Routing**: The application uses Angular's Router for navigation, defined in `app-routing.module.ts`. Each route corresponds to a component, facilitating a clear data flow.

## Developer Workflows
- **Building the Project**: Use the command `npm start` to build and serve the application locally. This command compiles the project and opens it in the browser at `http://localhost:4200`.
- **Testing**: Unit tests are located alongside components and services, following the naming convention `*.spec.ts`. Run tests using `ng test` to ensure all components function as expected.
- **Debugging**: Utilize browser developer tools to debug the application. Angular's source maps allow for easy navigation to the original TypeScript files.

## Project Conventions
- **File Naming**: Components and services are named using camelCase, with the file extension `.ts`. For example, `dynamic-button.component.ts` for a button component.
- **Styling**: Each component has its own stylesheet, following the naming convention `*.component.scss`. This keeps styles encapsulated and manageable.

## Integration Points
- **External Dependencies**: The project relies on Angular and various npm packages. Ensure all dependencies are installed by running `npm install` after cloning the repository.
- **Cross-Component Communication**: Use Angular's Input and Output decorators for parent-child component communication. For sibling components, consider using a shared service to manage state.

## Key Files/Directories
- `src/app/components/`: Contains all feature components.
- `src/app/services/`: Contains all services for data handling and business logic.
- `src/app/app-routing.module.ts`: Manages application routing.

## Conclusion
These instructions should help AI coding agents understand the structure and workflows of this Angular project, enabling them to assist effectively in development tasks.