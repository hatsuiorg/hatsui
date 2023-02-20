import { LOREM_IPSUM_FIVE_PARAGRAPHS, LOREM_IPSUM_SENTENCE } from './LoremIpsum';
import type { Novel } from '../types/Novel';

const FAKE_NOVELS: Novel[] = [
  {
    id: 'd8459c73-0199-5b4a-bbf6-85daec09de5f',
    type: 'LIGHT-NOVEL',
    title: 'Eighty-Six (86)',
    description: LOREM_IPSUM_SENTENCE,
    authorsAndIllustrators: ['Asato Asato'],
    cover: 'https://i.ibb.co/TmDwKRP/0fa2bbf5d7518dc8aa203726602c692f.png',
    chapters: [
      {
        id: '66e9844d-736c-50e5-a720-791a72116196',
        type: 'PROLOGUE',
        volumeNumber: 1,
        chapterNumber: 1,
        title: 'As papoulas que florescem vermelhas no campo de batalha',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 10),
      },
      {
        id: '09486477-d648-599d-96fe-250eaeee524e',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 2,
        title: 'O campo de batalha sem mortes',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 10),
      },
      {
        id: '6d7000c7-fea0-555e-b8a9-e34c860b296f',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 3,
        title: "I'm Westen nichts Neues",
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 10),
      },
      {
        id: '47cabc66-60a6-5016-890c-bacc4c46b0a5',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 4,
        title: 'Você parece inspirador quando está diante dos portões de Hades',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 10),
      },
      {
        id: '298c8323-c33a-5346-b6ee-89ec89479dac',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 5,
        title: 'O cavaleiro sem cabeça (1)',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 11),
      },
      {
        id: '4a22c262-ce91-52a3-a649-832b02a9811e',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 6,
        title: '<Legio> Mini nomen est, quia multi sumus',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 11),
      },
      {
        id: '2cec3026-9c91-5367-ac7c-a377e73b7837',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 7,
        title: 'O cavaleiro sem cabeça (2)',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 11),
      },
      {
        id: '35757116-f9f2-526d-b5b7-d7852409a7a8',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 8,
        title: 'Glória a porra do esquadrão Spearhead',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 11),
      },
      {
        id: '82fef845-162a-58be-b74e-1dab923c4d06',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 9,
        title: 'O cavaleiro sem cabeça (3)',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 11),
      },
      {
        id: '3b64bbc7-6580-50f8-b60e-3e3b8dc5ac7e',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 10,
        title: 'Fiat justitia, ruat cælum',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 11),
      },
      {
        id: 'd25b3548-46b8-546e-ba94-d95769647943',
        type: 'CHAPTER',
        volumeNumber: 1,
        chapterNumber: 11,
        title: 'O cavaleiro sem cabeça (4)',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 7, 11),
      },
      {
        id: '4ca48264-9e73-52a1-93ea-b2b64c87c155',
        type: 'PROLOGUE',
        volumeNumber: 2,
        chapterNumber: 1,
        title: 'As forças Sob Sua Alteza, a Rainha',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 8, 23),
      },
      {
        id: '0f228042-4090-53f5-a009-6a0356448310',
        type: 'CHAPTER',
        volumeNumber: 2,
        chapterNumber: 2,
        title: 'Ritt der Walküren',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 8, 30),
      },
      {
        id: '88414247-70a0-5a9f-8487-443e1ea74521',
        type: 'CHAPTER',
        volumeNumber: 2,
        chapterNumber: 3,
        title: 'Hino dos blindados',
        content: LOREM_IPSUM_FIVE_PARAGRAPHS,
        createdAt: new Date(2020, 9, 7),
      },
    ],
  },
];

export default FAKE_NOVELS;
