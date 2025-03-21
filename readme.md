## Package Manager

This project uses npm as the package manager.

To install dependencies:
```npm install```

To add new dependencies:
```npm install <package-name>```

To run scripts defined in package.json:
```npm run <script-name>```
```

If you want to enforce npm usage across your team to avoid package manager mixing, you can also add an `.npmrc` file to your project root:

```:.npmrc
engine-strict=true
package-lock=true
```

This will ensure consistency in dependency management across your development team.

Would you like me to help you set up any specific npm configurations or scripts for your project?