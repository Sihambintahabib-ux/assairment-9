import React from 'react';
import MyContainer from './MyContainer';

const Slider = () => {
    return (
      <MyContainer>
        <div className=" w-full flex gap-5  items-center ">
          <div className="flex-1 space-y-5">
            <h1 className='text-8xl'> Pet care in winter</h1>
          <p className='text-2xl'>keep your pet healthy</p>
          <button className='btn btn-ghost rounded-full text-lg bg-orange-400 text-white p-5 '> Get started</button>
          </div>
          <div className=" flex-1  ">
            {/* <img
              className="rounded-5xl"
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=400&fit=crop"
              alt=""
              srcset=""
            /> */}
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=400&fit=crop"
                  className="w-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=400&fit=crop"
                  className="w-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500&h=400&fit=crop"
                  className="w-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1530041539828-114de669390e?w=500&h=400&fit=crop"
                  className="w-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </MyContainer>
    );
};

export default Slider;