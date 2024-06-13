import React, { memo } from "react";

const CustomTable = ({ data }) => {
  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((col, index) => (
              <th key={index} className="py-2 px-4 border-b">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!data.length === 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <p className="w-full p-10 flex items-center justify-center bg-gray-100">
              No data available.
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default memo(CustomTable);
