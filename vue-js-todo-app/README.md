# vue-js-todo-app

## Overview

This is the starting point for my "100 Days of Frontend Code" challege. I am already familiar with Vue and wanted to use it to kick off my learning. 

The goal is to initially build the same "Todo App" with four different frontend technologies.

The application setup and requirements are as listed below.

## Setup

- used "npm init vue@latest"
    - enabled: vue router, pinia, es-lint, prettier, and vitest
- added [tailwind css](https://tailwindcss.com/docs/guides/vite) with "npm install -D tailwindcss postcss autoprefixer"
    - configured based on documentation recommendations

## App Requirments
- Single page application (w/4 routes)
    - Auth
    - Todo List
    - Todo Stats
    - Settings
- Smooth transitions
    - adding/removing components
    - between routes
- Popup Notifications (toasts, clearable)
- Footer contains stats for app (number of open todos, complete, current date, etc.)
- Light / Dark Mode built in

## Dev Requirements
- Responsive
    - single column mobile
    - list and details pane with side nav on desktop
- Scalable
    - able to be upgraded toa full-stack app later
    - API driven (endpoints are local storage for now)
- Clean Code
    - DRY (Dont Repeat Yourself)
    - Simple Stack

## Views / Routes
- Auth / auth
- Todos / todo-list
- TodoStats / todo-stats
- Settings / settings

## Components
### Base Components
- base-container
- base-button
- base-card
- base-overlay
- base-form
- base-toggle (slider)
- base-notification

### Main Components
- todo-list
- todo-list-item
- create-todo-item
- simple-stats
- detailsPanel
    - mobile (overlay)
    - desktop (panel: right side)
- nav
- login
- register
- reminder-notification