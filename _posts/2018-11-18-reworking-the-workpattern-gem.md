---
layout: post
title: "Reworking the Workpattern Gem"
date: 2018-11-18T21:34:04+00:00
---
![rework](/images/rework.png)

This whole post is really here to challenge myself to do what I say I am going to do by making it public.  I will be posting articles in the future which should be more interesting.  There I go again with yet another promise!

I wrote a Rubygem called Workpattern which performs date calculations taking into consideration the patterns of working and resting time in each day down to a single minute.  It is designed to perform the kind of temporal calculations needed to calculate a forward and backward pass for a project schedule.  Examples of products which do this include [Microsoft Project](https://products.office.com/en-gb/project/project-and-portfolio-management-software), [Oracle Primavera P6](https://www.oracle.com/applications/primavera/products/project-portfolio-management/), [Open Plan](https://www.deltek.com/en/products/project-and-portfolio-management/open-plan) and any other project management scheduling application.

At the time of writing it has 279 assertions in the test suite which take about 0.17 seconds to run.  I wrote it to learn how to program in Ruby and to cut a long story short, it is a bit of an ugly mess.  The latest version is 0.5.0, released on 19th October 2016, and had 831 downloads when writing this post.  I recently took a look at it and found the code to be hard to follow, poorly structured and frankly embarrassing.  I have failed to build a community around it or provide a decent example of how it could be used.

In my day job, I help organisations improve their project delivery, which usually involves the use of new software or reconfiguration of existing software.  There have been times when I end up having to do a bit of programming which I really enjoy.  I am a bit of a dabbler and seem to get to know a little of a new language about every year.  At 55 years old, I've decided I'd like to take on the role as a Software Developer and as a first step I've started to refactor the Workpattern rubygem this very evening.

I had a quick scan of it and ran the test suite using Ruby v2.6 which produced a number of warnings I then dealt with so they would go away.  I'm making very small changes and ensuring the test suite passes before I commit.  These changes are in the [rework branch in the Workpattern github repository](https://github.com/callenb/workpattern/tree/rework).  I then moved on to replacing some literals with constants so I don't repeat myself.  Each change is small and only gets committed when the tests pass.  This has helped me to refamiliarise myself with the code.

There is almost no documentation in the code and I want to add appropriate documentation.  The way I implement Workpattern is not obvious and cannot be explained by good named methods and variables alone, even if I had them, which I don't.  I would also like to provide at least one basic sample application to help potential users understand what it can do.

This is quite a lot of work to do as a hobby so I imagine it won't be completed until at least Easter 2019.  Hopefully, I will learn quite a lot on the way and may even post something of interest to my future self as well as others.
