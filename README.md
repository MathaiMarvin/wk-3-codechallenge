# Week 3 Code Challenge

# Description

The task entailed getting data from JSON server and through manipulation of the DOM being able to display the data on a webpage. The landing page displays the first movie's details; the runtime, title, showtime, the poster and the number of the available tickets. In addition there is a movie menu list on the landing page containing the titles' of the different movies. Upon clicking the title the movie information is displayed on the page.

# Getting Started

In order to be able to use this particular repository one needs to have the following:

1. A computer that runs either on: (Windows 7+, Linux, Mac OS).
2. A little bit of patience.

## Installation

To be able to use this repository on your machine one needs to:

- Open a terminal on your computer
- Clone the repo by using the following:

        git clone git@github.com:MathaiMarvin/wk-3-codechallenge.git

- Change directory to the repository folder

        cd wk-3-code-challenge

- Open in code editor: Visual Studio Code:

        code .

- Ensure that JSON server installed in your machine

        npm install -g json-server

# Running the application

- Start the JSON server:

        json-server --watch db.json

- Open html on browser to display the webpage using liveserver
- The web application has movie list which when the title is clicked displays all the movie information from the server. On the home page there is the first movie informations

## Live link of the web page

        https://mathaimarvin.github.io/wk-3-codechallenge/

# MIT License

Copyright (c) 2022 MathaiMarvin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
