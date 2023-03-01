import math

def pyramid (base, height):
    total_stone = 0
    total_marble = 0
    total_lapis = 0
    
    step = 0

    while base > 2:
        marble = (base * 4 - 4) * height
        stone = (base * base * height) - marble

        total_stone += stone
        step += 1

        if step % 5 == 0:
            total_lapis += marble
        else:
            total_marble += marble

    step += 1

    total_gold = 1*height if step % 2 == 1 else 4*height

    print(f'Stone required: {math.ceil(total_stone)}')
    print(f'Marble required: {math.ceil(total_marble)}')
    print(f'Lapis Lazuli required: {math.ceil(total_lapis)}')
    print(f'Gold required: {math.ceil(total_gold)}')
    print(f'Final pyramid height: {math.floor(step * height)}')


pyramid (11, 1)