import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import MyList from './MyList';

interface AccordionProps {
  header: string;
  children: ReactNode;
}

const SingleAccordion: FC<AccordionProps> = ({ header, children }) => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full max-w-md mx-auto mt-5 border border-gray-200 rounded-lg"
    >
      <Accordion.Item value="item-1" className="border-b">
        <Accordion.Header className="w-full">
          <Accordion.Trigger
            className={clsx(
              'group',
              'w-full flex justify-between items-center py-4 px-5',
              'bg-white',
              'text-left text-gray-900',
              'focus:outline-none focus-visible:ring focus-visible:ring-purple-500',
              'transition duration-300 ease-in-out'
            )}
          >
            {header}
            <ChevronDownIcon
              className={clsx(
                'ml-2 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180'
              )}
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-5 py-4 bg-gray-50 text-gray-700">
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const MyAccordion: FC = () => {
  return (
    <div>
      <SingleAccordion header="Accordion 1">
        <MyList/>
      </SingleAccordion>
      
      <SingleAccordion header="Accordion 2">
        <ul className="list-disc pl-5">
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
        </ul>
      </SingleAccordion>

      <SingleAccordion header="Accordion 3">
        <div>Your custom content can go here.</div>
      </SingleAccordion>
    </div>
  );
};

export default MyAccordion;
