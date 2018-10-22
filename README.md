# git_workspace | Playground for cool little coding projects

## Playground for cool little coding projects

### https://github.com/shelbourn/git_workspace.git

**_Main Contributors to this repository are:_**
<br>
**_:grin: • @shelbourn_**
<br>
**_:sunglasses: • @nickanderson038_**
<br>

## Simple Git Commands

```
# check your current branch

git branch

# create a new branch, containing all the code from the master branch

git branch place-a-new-name-here

# switch to the new branch

git checkout place-a-new-name-here

# git video - Education

https://www.youtube.com/watch?v=oFYyTZwMyAg
```

<br>

## Link for Basics of Branching and Merging

* <a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" target="_blank">Basics of Branching and Merging</a>

<br>

## Resolving Merge Conflicts Between Branches that are both being updated Simultaneously

* <a href="https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/" target="_blank">Resolving Merge Conflicts</a>

<br>

## Git Pull vs Git Fetch (and Stashing)

* <a href="https://codeahoy.com/2016/04" target="_blank">Git Pull vs Git Fetch (and Stashing)</a>

<br>

## Syncing local branches (including multiple branches) with remote branches (remote branch overrides local branch)

Fetch remote branch changes and pull them into local branches:

```
git fetch --prune
```

Prune remote branches that have been removed to eliminate them locally:

```
git pull -p --prune
```

<br>
<br>

---

## Link for Vim Cheat Sheet

* <a href="https://vim.rtorr.com/" target="_blank">Vim Cheat Sheet</a>

<br>

## Using Mark Down Syntax Resources :wink:

1. [Mark Down Syntax](https://en.wikipedia.org/wiki/Markdown)
2. [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
3. [GitHub Emoijs](https://gist.github.com/roachhd/1f029bd4b50b8a524f3c)

<br>
<br>

---

## JSON Free Testing Api

* <a href="https://jsonplaceholder.typicode.com" target="_blank">JSON Placeholder Webapp</a>

<br>

## Settings Sync for VS Code (Syncs user settings across multiple VS Code environments) _MAKE SURE TO SAVE YOUR SYNC SETTINGS AUTHENTICATION TOKEN!_

* [Settings Sync for VS Code](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

<br>

## Configuration of your User Name and Email Addresses through the Command Line Interface for Git

<br>

### Globally Set User Name

<br>

```
$ git config --global user.name "Your User Name Here"
```

<br>

### Confirm that you have set your Global User Name Correctly

<br>

```
$ git config --global user.name
> Your User Name Here
```

<br>

### Set User Name for a Single Repository

<br>

```
$ git config user.name "Your User Name Here"
```

<br>

### Confirm that you have set your Single Repo User Name Correctly

<br>

```$ git config user.name
> Your User Name Here
```

<br>

### Globally Set User Email Address

<br>

```
$ git config --global user.email "your@email.com"
```

<br>

### Confirm that you have set your Global User Email Address Correctly

<br>

```
$ git config --global user.email
> your@email.com
```

<br>

### Set User Email Address for One Repository Only

<br>

```
$ git config user.email "your@email.com"
```

<br>

### Confirm that you have Correctly set your User Email Address for One Repository

<br>

```
$ git config user.email
> your@email.com
```

<br>

### Deleting git branches: [Git Delete information](https://makandracards.com/makandra/621-git-delete-a-branch-local-or-remote)

```bash
# local branches

git branch -d branchName

# origin branches

git push origin --delete branchName

# NOTE: '-d' is short hand for '--delete'
```

<br>

## Sync Local Repo with Remote Repo

<br>

```
git fetch origin
git reset --hard origin/master
git clean -f -d
```

<br>

## Paths Explained: Absolute, relative, UNC, and URL

<br>

* [Paths Explained](http://desktop.arcgis.com/en/arcmap/10.3/tools/supplement/pathnames-explained-absolute-relative-unc-and-url.htm)
* [HTML File Paths](https://www.w3schools.com/Html/html_filepaths.asp)
* [Absolute & Relative Paths](https://www.youtube.com/watch?v=ephId3mYu9o)

<br>

## Git Housekeeping (Cleaning up local repos after merges, pulls, etc.)

<br>

[Git Housekeeping](https://railsware.com/blog/2014/08/11/git-housekeeping-tutorial-clean-up-outdated-branches-in-local-and-remote-repositories/)

<br>

## Updating Node.js Server Via Command Line (without downloading standalone install packages)

<br>

```
1   sudo npm cache clean -f
2   sudo npm install -g n
3   sudo n stable
```

<br>

To install the latest release, use `n latest`. Alternatively, you can run `n #.#.#` to get a specific Node version
<br>
*Source: [How to Update Node.js to Latest Version (Linux, Ubuntu, OSX, Others)](https://www.hostingadvice.com/how-to/update-node-js-latest-version/)*