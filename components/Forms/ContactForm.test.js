import { getByTestId, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import ContactForm from "./ContactForm"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

test('Contact Form Submission', async () => {
    render(<ContactForm />)

    const firstName = screen.getByLabelText('Prénom')
    const lastName = screen.getByLabelText('Nom')
    const email = screen.getByLabelText('Courriel')
    const phone = screen.getByLabelText('Téléphone')
    const message = screen.getByLabelText('Message')
    const btnSubmit = screen.getByTestId('btnSubmit')

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();

    const user = userEvent.setup()

    await user.type(firstName, 'First Name')
    expect(firstName).toHaveValue('First Name')

    await user.type(lastName, 'Last Name')
    expect(lastName).toHaveValue('Last Name')

    await user.type(email, 'test-sconcept@sconcept.ca')
    expect(email).toHaveValue('test-sconcept@sconcept.ca')

    await user.type(phone, '5141111233')
    expect(phone).toHaveValue('5141111233')

    await user.type(message, 'Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, est lacinia sapien ac iaculis sodales varius enim sed, orci nec justo pretium suscipit at netus. Senectus ridiculus congue mus sed sodales curabitur tempus vel integer, nibh in elementum purus urna arcu nisl pulvinar cubilia ut, habitasse a lobortis vehicula rhoncus lectus augue nec. Urna fames suspendisse himenaeos iaculis cubilia tellus donec nostra, nullam faucibus ullamcorper dapibus elementum proin vel integer lectus, dictum malesuada luctus mattis aenean netus quisque.')
    expect(message).toHaveValue('Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, est lacinia sapien ac iaculis sodales varius enim sed, orci nec justo pretium suscipit at netus. Senectus ridiculus congue mus sed sodales curabitur tempus vel integer, nibh in elementum purus urna arcu nisl pulvinar cubilia ut, habitasse a lobortis vehicula rhoncus lectus augue nec. Urna fames suspendisse himenaeos iaculis cubilia tellus donec nostra, nullam faucibus ullamcorper dapibus elementum proin vel integer lectus, dictum malesuada luctus mattis aenean netus quisque.')

    user.click(btnSubmit)
    
    await waitFor(() => {
        expect(screen.getByTestId('btnSending')).toBeInTheDocument()
    })

})