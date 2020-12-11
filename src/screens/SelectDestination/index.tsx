import React from 'react';
import { ImageURISource } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import homeIcon from '../../assets/home.png';
import historyIcon from '../../assets/history.png';

import * as S from './styles';

export interface IItemProps {
  id: number;
  icon: ImageURISource;
  text: string;
  subtext?: string;
}

interface IRenderItemProps {
  item: IItemProps; // TODO: Verificar
}

const data: IItemProps[] = [
  { id: 1, icon: homeIcon, text: 'johar town', subtext: ' block A St. 2' },
  { id: 2, icon: historyIcon, text: 'Multan' },
  { id: 3, icon: historyIcon, text: 'Islamabad' },
  { id: 4, icon: historyIcon, text: 'Muree' },
];

const SelectDestination: React.FC = () => {
  const navigation = useNavigation();

  function renderItem({ item }: IRenderItemProps) {
    return (
      <S.HistoryItem>
        <S.ItemIcon source={item.icon} />
        <S.ItemText>{item.text}</S.ItemText>
        {item.subtext && <S.ItemText small>{item.subtext}</S.ItemText>}
      </S.HistoryItem>
    );
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary />
        </S.Timeline>
        <S.FromTo>
          <S.From>Lahore</S.From>
          <S.To>Islamabad</S.To>
        </S.FromTo>
      </S.TopContainer>
      <S.Shadow />
      <S.HistoryList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
      <S.BottomContainer>
        <Button onPress={() => navigation.navigate('Request')}>Done</Button>
      </S.BottomContainer>
    </S.Container>
  );
};

export default SelectDestination;
