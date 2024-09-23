import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import MyList from './MyList';
import ProfilesList from './ProfilesList';

interface AccordionProps {
  header: string;
  children: ReactNode;
}

const SingleAccordion: FC<AccordionProps> = ({ header, children }) => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full max-w-md mx-auto mt-5 border border-[#3B3D41] rounded-lg"
    >
      <Accordion.Item value="item-1">
        <Accordion.Header className="w-full">
          <Accordion.Trigger
            className={clsx(
              'group',
              'w-full flex justify-between rounded-lg items-center py-4 px-5',
              'bg-zinc-900',
              'text-left text-white',
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
        <Accordion.Content className="px-5 py-4 bg-zinc-900 text-white">
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const MyAccordion: FC = () => {
  return (
    <div>
      <SingleAccordion header="LabVis">
        <ProfilesList />
      </SingleAccordion>

      <SingleAccordion header="Secretaria">
        <ProfilesList />
      </SingleAccordion>

      <SingleAccordion header="Centro Acadêmico">
        <ProfilesList />
      </SingleAccordion>
    </div>
  );
};

export default MyAccordion;
