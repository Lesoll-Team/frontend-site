import React from 'react';

const SoldOut = () => {
    return (
      <div className="w-full">
        <h2 className="text-center font-bold text-lightGreen text-4xl">
          {language ? "المفضلة" : "Favorites"}
        </h2>
        {!fav ? (
          <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
            <DotPulse size={50} speed={1.3} color="#309da0" />
          </div>
        ) : fav.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
            {/* {fav.map((favData) => (
              <FavoritesCard
                key={favData._id}
                propertyDetails={favData}
                onRemove={handleRemoveFromFavorites}
              />
            ))} */}
          </div>
        ) : (
          fav &&
          fav.length === 0 && (
            <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
              <Link
                title={language ? "لا يوجد عقارات " : "No Property"}
                className="flex flex-col items-center"
                href={"/"}
              >
                <h3 className="font-semibold text-3xl">
                  {language ? "لا يوجد عقارات " : "No Property"}
                </h3>
              </Link>
            </div>
          )
        )}
      </div>
    );
};




export default SoldOut;
