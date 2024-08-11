import Knight from '../Knight/Knight'
import Pawn from '../Pawn/Pawn'
import Rook from '../Rook/Rook'
import Bishop from '../Bishop/Bishop'
import King from '../King/king'
import Queen from '../Queen/Queen'
import './ChessBoard.css'

export default function ChessBoard() {
	return (
		<div className='wrapper'>
			{/* 8 черных пешек */}
			<Pawn black={'pawn_black'} position={'figure_a7'} />
			<Pawn black={'pawn_black'} position={'figure_b7'} />
			<Pawn black={'pawn_black'} position={'figure_c7'} />
			<Pawn black={'pawn_black'} position={'figure_d7'} />
			<Pawn black={'pawn_black'} position={'figure_e7'} />
			<Pawn black={'pawn_black'} position={'figure_f7'} />
			<Pawn black={'pawn_black'} position={'figure_g7'} />
			<Pawn black={'pawn_black'} position={'figure_h7'} />

			{/* 8 белых пешек */}
			<Pawn position={'figure_a2'} />
			<Pawn position={'figure_b2'} />
			<Pawn position={'figure_c2'} />
			<Pawn position={'figure_d2'} />
			<Pawn position={'figure_e2'} />
			<Pawn position={'figure_f2'} />
			<Pawn position={'figure_g2'} />
			<Pawn position={'figure_h2'} />

			{/* Rook */}
			<Rook black={'rook_black'} position={'figure_h8'} />
			<Rook black={'rook_black'} position={'figure_a8'} />
			<Rook />
			<Rook position={'figure_h1'} />

			{/* Knight */}
			<Knight black={'knight_black'} position={'figure_b8'} />
			<Knight black={'knight_black'} position={'figure_g8'} />
			<Knight />
			<Knight position={'figure_g1'} />

			{/* Bishop */}
			<Bishop black={'bishop_black'} position={'figure_c8'}/>
			<Bishop black={'bishop_black'} position={'figure_f8'}/>
			<Bishop />
			<Bishop position={'figure_f1'}/>

			{/* Quenn and King */}
			<King black={'king_black'} position={'figure_d8'}/>
			<King position={'figure_e1'}/>

			<Queen black={'queen_black'} position={'figure_e8'}/>
			<Queen />

		</div>
	)
}
