Typescript -> ExpressJs Project Starter
============================

> Structure folder of Typescript -> ExpressJs Project Starter

### A typical top-level directory layout

    .
    ├── app                     # Source files (alternatively `lib` or `app`)
    ├── dist                    # Compiled files 
    ├── docs                    # Documentation files 
    ├── tests                   # Automated tests 
    ├── tools                   # Tools and utilities
    ├── vendor                  # Project file not logic
    ├── LICENSE                 
    ├── .env                    # Environments
    ├── .jest.config.js         # Jest automation tests configuration
    ├── modemon.json            # Nodemon configuration
    ├── package.json            
    ├── tsconfig.json           # Typescript configuration
    └── README.md

<!-- > Use short lowercase names at least for the top-level files and folders except
> `LICENSE`, `README.md` -->

### Automated tests

Automated tests are usually placed into the `tests` or, less commonly, into the `spec` or `test` folder.

> **Q: Why tests are placed into a separate folder, as opposed to having them closer to the code under testS?**
>
> **A:** Because you don't want to test the code, you want to tests the *program*.

    .
    ├── ...
    ├── tests                   # Test folder (alternatively `spec` or `test`)
    │   ├── **.test.tsx         # Unit tests
    └── ...
