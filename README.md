Repository created to see an usage of different react hooks:

# UseRef01

Making a reference to the input and a paragraph.

# UseRefPreviousState

Making a reference to a number of renders and 'catching' a previous state value

# UseRefMemoryLeak

Problem scenario: When we make some kind of fetch request and component unmounts before handling the response.

Problem explanation: Assuming that user has a very slow internet connection and then decides to leave the current page for another interesting page (or just leaves a page before completing a request), the request would have already been made and our browser would be expecting a response, which when received, would lead us to call setState on a component that's no longer mounted.

Aside from setting state, we would now have unimportant data in our app with no means of accessing them. This process is repeated multiple times while the user uses the app, filling up useful memory with useless and inaccessible data and leading to performance issues.
