import user from 'helpers/user.json';
import data from 'helpers/data.json';
import friends from 'helpers/friends.json';
import transactions from 'helpers/transactions.json';
import {
  Profile,
  Container,
  Section,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

export const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <Statistics title="Upload stats" stats={data} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Statistics stats={data} />
        </Container>
      </Section>

      <Section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>

      <Section>
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </>
  );
};
