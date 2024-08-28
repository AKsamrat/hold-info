import React from 'react';
import Table from '../Components/Table';

const Home = () => {
  return (
    <div className="bg-[#191D28]">
      <div className="flex justify-between items-center gap-4 mx-11 pt-7">
        <div>
          <h1 className="text-[#3DC6C1] text-3xl font-semibold">0.1%</h1>
          <p className="text-gray-100 opacity-50">5 Mins</p>
        </div>
        <div>
          <h1 className="text-[#3DC6C1] text-3xl font-semibold">0.96%</h1>
          <p className="text-gray-100 opacity-50">1 Hour</p>
        </div>

        <div className="text-center items-center space-y-3">
          <span className="text-gray-100">Best Price to Trade</span>
          <div className="text-white text-4xl font-semibold">₹ 26,56,110</div>
          <div className="opacity-50 text-gray-100">
            Average BTC/INR net price including commission
          </div>
        </div>
        <div>
          <h1 className="text-[#3DC6C1] text-3xl font-semibold">2.73%</h1>
          <p className="text-gray-100 opacity-50">1 Day</p>
        </div>
        <div>
          <h1 className="text-[#3DC6C1] text-3xl font-semibold">7.51%</h1>
          <p className="text-gray-100 opacity-50">7 Days</p>
        </div>
      </div>
      <Table></Table>
      <div className="flex justify-center items-center fixed  bottom-0 right-[560px]  p-2 text-center">
        <button className="btn rounded-none  border-2 border-[#3DC6C1] text-[#3DC6C1]  ">
          Add hodlinfo to home screen
        </button>
      </div>
    </div>
  );
};

export default Home;
