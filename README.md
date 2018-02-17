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

## Git Markdown Cheat Sheet

[Git Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

<br>

## Link for Basics of Branching and Merging

[Basics of Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

<br>

## Link for Vim Cheat Sheet

[Vim Cheat Sheet](https://vim.rtorr.com/)

<br>

## Resolving Merge Conflicts Between Branches that are both being updated Simultaneously

[Resolving Merge Conflicts](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/)

<br>

## Git Emoji Cheat Sheet :wink:

[Emoji Cheat Sheet](https://gist.github.com/roachhd/1f029bd4b50b8a524f3c)

<br>

## Git Pull vs Git Fetch (and Stashing)

[Git Pull vs Git Fetch (and Stashing)](https://codeahoy.com/2016/04)

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

## JSON Free Testing Api

JSON Placeholder Webapp `https://jsonplaceholder.typicode.com/`

<br>

## Settings Sync for VS Code (Syncs user settings across multiple VS Code environments) _MAKE SURE TO SAVE YOUR SYNC SETTINGS AUTHENTICATION TOKEN!_

[Settings Sync for VS Code](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

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

## Sync Local Repo with Remote Repo

<br>

```
git fetch origin
git reset --hard origin/master
git clean -f -d
```

<br>