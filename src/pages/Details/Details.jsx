import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailCard from './DetailCard';

const Details = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const details = useLoaderData();

  useEffect(() => {
    // Find the detail based on the clicked card's ID
    const findDetail = details?.find((item) => item.id === parseInt(id));
    setDetail(findDetail);
  }, [id, details]);

  return (
    <div>
      {detail && <DetailCard detail={detail} />}
    </div>
  );
};

export default Details;
