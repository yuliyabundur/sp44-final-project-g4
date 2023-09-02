"""empty message

Revision ID: 8ad06f20bb0a
Revises: ead31bed37ec
Create Date: 2023-08-29 12:32:13.623443

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8ad06f20bb0a'
down_revision = 'ead31bed37ec'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint('user_avatar_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_unique_constraint('user_avatar_key', ['avatar'])

    # ### end Alembic commands ###
