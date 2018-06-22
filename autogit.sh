#!/bin/bash
read -p "push or rebase: " oper
if [ $oper == "push" ]
then
  git add -A
  git status
  read -p "Check that the files changes are correct. [y/n]: " variable
  if [ $variable == "y" ]
  then
    git commit -m ":memo: Add some documents `date`"
    git pull origin master
    git push origin master
  else
    echo "It's not pushed"
  fi
else
  git add -A
  git commit -m "rebase"
  git rebase -i HEAD~2
  read -p "Modified to complete. [y/n]: " variable
  if [ $variable == "y" ]
  then
    git push origin master -f
  else
    echo "It's not rebased"
  fi
fi
