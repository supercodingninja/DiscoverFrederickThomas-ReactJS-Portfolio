// //  Ref. https://www.npmjs.com/package/react-scroll-parallax // https://www.npmjs.com/package/react-scroll-parallax //
// // I still need to look into; because I can no loger get my application to load. //
// // Parallax Controller Context
// Access the controller via React context in any components rendered within a <ParallaxProvider> by using the withController() HOC:

 
// import { withController } from 'react-scroll-parallax';
 
// class MyComponent extends Component {
//     static propTypes = {
//         parallaxController: PropTypes.object,
//     };
 
//     doSomething() {
//         const { parallaxController } = this.props;
//         // do stuff with `parallaxController`
//     }
// }
 
// // Compose your component with the Higher Order Component
// export withController(MyComponent);
 
// Also parallaxController is accessible using useController() React hook in components without writing a class or wrapping them in HOC.

// import { useController } from 'react-scroll-parallax';
 
// const MyComponent = () => {
//     const { parallaxController } = useController();
//     // do stuff with `parallaxController`
 
//     return <div />;
// };
// Available Methods
// Access the following methods on parallaxController via context:

// update()

// Updates all cached attributes for parallax elements then updates their positions.

// destroy()

// Removes window scroll and resize listeners then resets all styles applied to parallax elements.

// Example usage of context
// The most common use case that would require access to the controller is dealing with images. Since the controller caches attributes for performance they will need to be updated with the correct values once the image loads. Here's an example of how you could do that with an <Image /> component:

// import { withController } from 'react-scroll-parallax';
 
// class Image extends Component {
//     handleLoad = () => {
//         // updates cached values after image dimensions have loaded
//         this.props.parallaxController.update();
//     };
 
//     render() {
//         return <img src={this.props.src} onLoad={this.handleLoad} />;
//     }
// }
 
// export withController(Image);
// If your parallax components are stuck and acting weird, this is most likely due to the fact that your page initial scroll was not at the top on load. Here's a possible solution to this problem using useController() hook. It can be used in your application top level component or specifically in the part of your application where you are experiencing problems.

// const ParallaxCache = () => {
//     const { parallaxController } = useController();
 
//     useLayoutEffect(() => {
//         const handler = () => parallaxController.update();
//         window.addEventListener('load', handler);
//         return () => window.removeEventListener('load', handler);
//     }, [parallaxController]);
 
//     return null;
// };
 
// // <ParallaxCache /> now can be used anywhere you have problems with cached attributes
// Troubleshooting
// If you're encountering issues like the parallax element jumping around or becoming stuck, there's a few likely culprits. Since this lib caches important positioning states it's possible for these to be outdated and incorrect. The most likely cause for this type of problem is the result of images loading and increasing the height of an element and/or the page. This can be fixed easily by updating the cache. Another likely issue is the CSS positioning applied to the parent or parallax element itself is fixed. Fixed positioning parallax elements is currently not supported and may appear to work in some cases but break in others. Avoid using position: fixed and instead use static, relative or absolute, which this lib was designed to support. If none of these are relevant and you still have trouble please post an issue with your code or a demo that reproduces the problem. //