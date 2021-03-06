import { render, screen } from 'utils/test-utils';

import Section, { SectionProps } from '.';

describe('<Section />', () => {
  it('should render ...', () => {
    const props: SectionProps = {
      id: 'test',
      name: 'Component Test',
      children: <p data-testid="paragraph">Test paragraph</p>,
    };

    render(<Section {...props} />);

    expect(
      screen.getByRole('heading', { name: props.name }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
  });
});
