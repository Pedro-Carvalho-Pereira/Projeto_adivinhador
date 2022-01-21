import { useHistory } from 'react-router-dom';
import '../styles/Paisnome.scss';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-dropdown/style.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


export function Headmenu () {
    const historico = useHistory();

    return(
        <div
                className={`navigator `}>
                <Navigation className='navigator'
                    activeItemId="/management/members"
                    onSelect={({ itemId }) => {
                        if (itemId !== 'Nao') {
                            historico.push('/' + itemId);
                        }
                    }}
                    items={[

                        {
                            title: 'Menu',
                            itemId: 'Nao',
                            subNav: [
                                {
                                    title: 'Home',
                                    itemId: '',
                                },
                                {
                                    title: 'Pais/Nome',
                                    itemId: 'paisnome',
                                },
                            ],
                        }
                    ]} />
            </div>
    )
}