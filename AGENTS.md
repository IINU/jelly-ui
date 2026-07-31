# Coding Guidelines

- Always use braces for `if` statements, even for single-line bodies. Never write `if (x) return` — always use `if (x) { return }`.
- Comment the code, not the change. Write only what someone reading the file cold needs in order to understand it — units, invariants, non-obvious constraints, and anything the code cannot state itself. Do not explain why you chose one construct over another, what the code used to do, or why a review comment was addressed; that belongs in the commit message or the pull request. A useful test: if you would not have written the comment on a greenfield file, delete it.

# Pull Requests

- Prefix the title with `JEL-XXXX`. For example, if the branch name is `jel-1234-add-new-feature`, the title prefix should be `JEL-1234`.
  - Vice versa, when starting from a Linear ticket, prefix the branch name with the lowercased ticket ID (e.g. ticket JEL-1234 → branch `jel-1234-add-new-feature`).
- Keep the content concise; focus on why the change is needed rather than repeating implementation details that reviewers can already see in the diff.
- For PRs against `main`, bump the version in `package.json` and update `pnpm-lock.yaml` to match.