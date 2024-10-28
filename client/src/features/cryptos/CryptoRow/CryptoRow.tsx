import { Crypto } from '../../../types/cryptosTypes';
import { formatCurrency } from '../../../utils/formatCurrency';
import Chart from '../Chart/Chart';
import CoinInfo from '../CoinInfo/CoinInfo';
import MenuIcon from '../MenuIcon/MenuIcon';
import PriceChange from '../PriceChange/PriceChange';
import StarIcon from '../StarIcon/StarIcon';
import { FC, useState } from 'react';

import './CryptoRow.scss';

type CryptoRowProps = {
  crypto: Crypto;
};

const CryptoRow: FC<CryptoRowProps> = ({ crypto }) => {
  const [starVisible, setStarVisible] = useState<boolean>(true);

  const handleStarVisibilityToggle = () => {
    setStarVisible(prevVisible => !prevVisible);
  };

  return (
    <div className='crypto-row'>
      <StarIcon
        starVisible={starVisible}
        onToggle={handleStarVisibilityToggle}
      />
      <div className='cmc-rank'>{crypto.cmc_rank}</div>

      <CoinInfo crypto={crypto} />

      <div className='price'>
        {formatCurrency(crypto.quote.USD.price, 'USD')}
      </div>

      <PriceChange change={crypto.quote.USD.percent_change_1h} />
      <PriceChange change={crypto.quote.USD.percent_change_24h} />
      <PriceChange change={crypto.quote.USD.percent_change_7d} />

      <div className='market-cap'>
        {formatCurrency(crypto.quote.USD.market_cap, 'USD', false)}
      </div>

      <Chart crypto={crypto} change7d={crypto.quote.USD.percent_change_7d} />

      <MenuIcon />
    </div>
  );
};

export default CryptoRow;