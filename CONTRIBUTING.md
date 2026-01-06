# Contributing to ng-flowbite

We would love for you to contribute to ng-flowbite and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

## Code of Conduct

Help us keep ng-flowbite open and inclusive. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Got a Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [StackOverflow](https://stackoverflow.com/questions/tagged/ng-flowbite) where the questions should be tagged with tag `ng-flowbite`.

StackOverflow is a much better place to ask questions since:

- there are hundreds of people willing to help on StackOverflow
- questions and answers stay available for public viewing so your question/answer might help someone else
- Stack Overflow's voting system assures that the best answers are prominently visible.

To save your and our time we will be systematically closing all the issues that are requests for general support and redirecting people to StackOverflow.

## Found a Bug?

If you find a bug in the source code, you can help us by submitting an issue to our [GitHub Repository](https://github.com/your-username/ng-flowbite). Even better, you can submit a Pull Request with a fix.

## Missing a Feature?

You can request a new feature by submitting an issue to our [GitHub Repository](https://github.com/your-username/ng-flowbite). If you would like to implement a new feature, please consider the size of the change:

- **Small Changes** can be crafted and submitted to the [GitHub Repository](https://github.com/your-username/ng-flowbite) as a Pull Request.
- **Large Features** should first be discussed in an issue to ensure the feature aligns with the project's goals.

## Submission Guidelines

### Submitting an Issue

Before you submit an issue, please search the issue tracker. An issue for your problem might already exist and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs, we will systematically need:

1. A minimal reproduction scenario
2. The version of Angular, ng-flowbite, Flowbite, and TypeScript you're using
3. The behavior you expect to see, and the actual behavior observed

You can file new issues by filling out our [issue form](https://github.com/your-username/ng-flowbite/issues/new).

### Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub](https://github.com/your-username/ng-flowbite/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.
2. Make your changes in a new git branch:

   ```shell
   git checkout -b my-fix-branch main
   ```

3. Create your patch, **including appropriate test cases**.
4. Follow our [Coding Rules](#rules).
5. Run the full test suite, and ensure that all tests pass.
6. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).
7. Push your branch to GitHub:

   ```shell
   git push origin my-fix-branch
   ```

8. In GitHub, send a pull request to `ng-flowbite:main`.

## Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (unit tests).
- All public API methods **must be documented**.
- We follow [Angular's style guide](https://angular.io/guide/styleguide).
- We use TypeScript for all new code.
- We use Tailwind CSS utility classes following Flowbite's design patterns.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope could be anything specifying the place of the commit change. For example `modal`, `dropdown`, `tooltip`, etc.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Examples

```
feat(modal): add support for custom backdrop classes

Add ability to customize backdrop styling through modal config.

Closes #123
```

```
fix(dropdown): prevent dropdown from closing on item click

The dropdown was closing when clicking on dropdown items even when closeOnClick was set to false.

Fixes #456
```

```
docs(readme): update installation instructions

Update README with latest Angular version compatibility information.
```

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/ng-flowbite.git
cd ng-flowbite
```

2. Install dependencies:

```bash
npm install
```

3. Build the library:

```bash
npm run build
```

4. Run tests:

```bash
npm test
```

## Questions?

Don't hesitate to ask questions by opening an issue on the [GitHub Repository](https://github.com/your-username/ng-flowbite/issues).

Thanks for contributing to ng-flowbite! :heart:

