import CreateButton from '../Button/CreateButton';
import SearchButton from '../Button/SearchButton';
import SearchInput from '../Input/SearchInput';
import './Header.scss';

export default function Header() {
    return (
        <div className="todo">
            <CreateButton />
            <div className="todo__search">
                <SearchInput />
                <SearchButton />
            </div>
        </div>
    );
}
