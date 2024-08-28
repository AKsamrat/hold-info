import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosCommon from '../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

const Table = () => {
  const axiosCommon = useAxiosCommon();
  const { data: assetData = [] } = useQuery({
    queryFn: async () => {
      const { data } = await axiosCommon('/pData');
      console.log(data);
      // refetch();

      return data;
    },
    queryKey: ['assetData'],
  });
  return (
    <div className="mt-6">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-white font-semibold text-xl">
            <tr>
              <th>#</th>
              <th>Platform</th>
              <th>Last Trade price</th>
              <th>Buy/Sell Priec</th>
              <th>Difference</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {assetData?.map((data, index) => (
              <tr key={data._id} className="bg-gray-500">
                <td>{index + 1}</td>
                <td>{data?.base_unit}</td>
                <td>₹{data?.last}</td>
                <td>₹{`${data.buy}/₹ ${data.sell}`}</td>
                <td>{data.volume}%</td>
                <td>₹0</td>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
