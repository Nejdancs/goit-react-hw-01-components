import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  Title,
  StatList,
  StatItem,
  Percentage,
  Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
