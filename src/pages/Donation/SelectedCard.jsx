import React from 'react';
const SelectedCard = ({ card }) => {
const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = card || {};
  
  const cardStyle = {
    backgroundColor: card_bg || '#FFFFFF', 
  };
  const badgeStyle = {
    backgroundColor: category_bg || '#FFFFFF', 
    color: text_button_bg || '#000000'
  };

  const titleStyle = {
    color: text_button_bg || '#000000',
  };

  return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" style={cardStyle} >
            <div
              className="w-1/3 object-cover"
              style={{ backgroundImage: `url('${picture}')` }}
            >
            </div>
            <div className="w-2/3 p-4 md:p-4">
              <div className="badge rounded-md" style={badgeStyle}>
                {category}
              </div>
              <h2 className="card-title" style={titleStyle}>
                {title}
              </h2>
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl" style={titleStyle}>
                ${price}
              </h1>
              <div className="mt-3 item-center">
                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" style={badgeStyle}>
                  View Detail
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};
export default SelectedCard;
