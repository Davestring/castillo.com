import Insights from 'components/modules/Insights';
import { INSIGHTS_DATA, INSIGHTS_HEADING } from 'stories/mocks/insights';

export default {
  title: 'Modules/Insights',
  component: Insights,
  argTypes: {
    heading: {
      name: 'heading',
      default: undefined,
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '-',
    },
    insights: {
      name: 'insights',
      default: [],
      type: { name: 'object', required: false },
      control: { type: 'object' },
      description: '-',
    },
  },
};

const Template = (args) => <Insights {...args}></Insights>;

export const withHeading = Template.bind({});
withHeading.args = {
  heading: INSIGHTS_HEADING,
};

export const withContent = Template.bind({});
withContent.args = {
  heading: INSIGHTS_HEADING,
  insights: INSIGHTS_DATA,
};
