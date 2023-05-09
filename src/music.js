import {useRef}from 'react';


function Music(){

    //ex 100% javascript
    /*
    const playSong = () => {
        const song = new Audio("all_samples/song-instrumental.mp3")
        song.play();
    }
    */

    const audioRef0 = useRef();
    const playExistingSong0 = () =>{
        audioRef0.current.play();

        }

    //ex avec un ref HTML
    const audioRef = useRef();
    const playExistingSong = () =>{
        audioRef.current.play();
    }

    const audioRef2 = useRef();
    const playExistingSong2 = () =>{
        audioRef2.current.play();
    }

    const audioRef3 = useRef();
    const playExistingSong3 = () =>{
        audioRef3.current.play();
    }

    const audioRef4 = useRef();
    const playExistingSong4 = () =>{
        audioRef4.current.play();
    }

    const audioRef5 = useRef();
    const playExistingSong5 = () =>{
        audioRef5.current.play();
    }

    const audioRef6 = useRef();
    const playExistingSong6 = () =>{
        audioRef6.current.play();
    }

    const audioRef7 = useRef();
    const playExistingSong7 = () =>{
        audioRef7.current.play();
    }

    const audioRef8 = useRef();
    const playExistingSong8 = () =>{
        audioRef8.current.play();
    }

    const audioRef9 = useRef();
    const playExistingSong9 = () =>{
        audioRef9.current.play();
    }

    const audioRef10 = useRef();
    const playExistingSong10 = () =>{
        audioRef10.current.play();
    }

    const audioRef11 = useRef();
    const playExistingSong11 = () =>{
        audioRef11.current.play();
    }

    const audioRef12 = useRef();
    const playExistingSong12 = () =>{
        audioRef12.current.play();
    }

    const audioRef13 = useRef();
    const playExistingSong13 = () =>{
        audioRef13.current.play();
    }

    const audioRef14 = useRef();
    const playExistingSong14 = () =>{
        audioRef14.current.play();
    }

    const audioRef15 = useRef();
    const playExistingSong15 = () =>{
        audioRef15.current.play();
    }

    const audioRef16 = useRef();
    const playExistingSong16 = () =>{
        audioRef16.current.play();
    }


 
 
    return (
       /*
            {/*el JS */ /*} 
            <div className="center">
            <button onClick={playSong} >
                <img src="https://i.pinimg.com/originals/b6/d6/aa/b6d6aab97882004cece0b69d8ed4ee24.gif"/>
         
                </button>
            </div>
            */

            
//<div className="w-full sm:w-1/2 md:w-1/4 bg-red-500 text-black">      
<div className="ensemble">   

            <div className="song">
            <audio ref={audioRef0}>
                <source src="all_samples/song-instrumental.mp3"/>
            </audio>
            <button className="center"  onClick={playExistingSong0}>
            <img className="play" src="all_samples/play.png"/>
            <img  className="centre" src="https://i.pinimg.com/originals/b6/d6/aa/b6d6aab97882004cece0b69d8ed4ee24.gif"/>
            </button>
            </div>
          
            <div className="centerdeux">
            {/*el HTML */}
            <audio ref={audioRef3}>
                <source src="all_samples/high/1.mp3"/>
            </audio>
            <button className= " bouton" onClick={playExistingSong3}>Work it</button>
            

            <audio ref={audioRef}>
                <source src="all_samples/high/2.mp3"/>
            </audio>
            <button  className= "bouton" onClick={playExistingSong}>Make it</button>

            <audio ref={audioRef2}>
                <source src="all_samples/high/3.mp3"/>
            </audio>
            <button  className= " bouton" onClick={playExistingSong2}>do it</button>

            <audio ref={audioRef4}>
                <source src="all_samples/low/4.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong4}>makes us</button>

            <audio ref={audioRef5}>
                <source src="all_samples/low/5.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong5}>Harder</button>

            <audio ref={audioRef6}>
                <source src="all_samples/low/6.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong6}>Better</button>

            <audio ref={audioRef7}>
                <source src="all_samples/low/7.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong7}>Faster</button>

            <audio ref={audioRef8}>
                <source src="all_samples/high/8.mp3"/>
            </audio>
            <button  className= "bouton" onClick={playExistingSong8}>Stronger</button>

            <audio ref={audioRef9}>
                <source src="all_samples/high/9.mp3"/>
            </audio>
            <button  className= "bouton" onClick={playExistingSong9}>More than</button>

            <audio ref={audioRef10}>
                <source src="all_samples/high/10.mp3"/>
            </audio>
            <button  className= "bouton" onClick={playExistingSong10}>Hour</button>

            <audio ref={audioRef11}>
                <source src="all_samples/high/11.mp3"/>
            </audio>
            <button  className= " bouton" onClick={playExistingSong11}>Our</button>

            <audio ref={audioRef12}>
                <source src="all_samples/low/12.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong12}>Never</button>

            <audio ref={audioRef13}>
                <source src="all_samples/low/13.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong13}>Ever</button>

            <audio ref={audioRef14}>
                <source src="all_samples/low/14.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong14}>After</button>

            <audio ref={audioRef15}>
                <source src="all_samples/low/15.mp3"/>
            </audio>
            <button className= "boutonlow" onClick={playExistingSong15}>Work is</button>

            <audio ref={audioRef16}>
                <source src="all_samples/high/16.mp3"/>
            </audio>
            <button  className= " bouton" onClick={playExistingSong16}>Over</button>
 
            </div>
            
</div>
      
    )
}


export default Music;