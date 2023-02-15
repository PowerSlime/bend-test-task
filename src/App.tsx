import './App.scss';

import React from 'react';

import styles from './App.module.scss';
import Table from './components/Table';
import TableGroup from './components/TableGroup';
import Zone from './components/Zone';

const zones = [
  {
    title: 'Zone 1',
    groups: [
      {
        badgeColor: 'orange',
        tables: [3, 1, 4, 12],
      },
      {
        badgeColor: 'yellow',
        tables: [6, 13],
      },
      {
        badgeColor: 'yellow',
        tables: [8, 10, 11],
      },
      {
        badgeColor: 'yellow',
        tables: [9, 7],
      },
      {
        badgeColor: 'red',
        tables: [5],
      },
      {
        badgeColor: 'yellow',
        tables: [15],
      },
      {
        badgeColor: 'yellow',
        tables: [16],
      },
    ],
  },
  {
    title: 'Zone 2',
    groups: [
      {
        badgeColor: 'yellow',
        tables: [2],
      },
    ],
  },
  {
    title: 'Zone 4',
    groups: [
      {
        badgeColor: 'yellow',
        tables: [2, 22],
      },
    ],
  },
  {
    title: 'Zone 5',
    groups: [
      {
        badgeColor: 'yellow',
        tables: ['A2', 'A1'],
      },
    ],
  },
];

function App() {
  return (
    <header className={styles.header}>
      {zones.map((zone, zoneIndex) => (
        <Zone title={zone.title} key={zoneIndex}>
          {zone.groups.map((group, groupIndex) => (
            <TableGroup key={groupIndex}>
              {group.tables.map((table, tableIndex) => (
                <Table
                  key={tableIndex}
                  title={table}
                  suffix={table}
                  badgeColor={group.badgeColor && tableIndex === 0 ? group.badgeColor : undefined}
                />
              ))}
            </TableGroup>
          ))}
        </Zone>
      ))}
    </header>
  );
}

export default App;
