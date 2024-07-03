package com.daybreak.rangers.service;

import com.daybreak.rangers.model.Member;
import com.daybreak.rangers.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    // 외부에서 넣어주도록 변경함
    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원가입
     **/
    public long join(Member member) {
        // 같은 이름이 있는 중복 회원x
//        Optional<Member> result = memberRepository.findByName(member.getName()); // Optional을 꺼낼때 다음과 같이 진행
//        result.ifPresent(m -> {
//            throw new IllegalStateException("이미 존재하는 회원입니다.");
//        });

        validateDuplicateMember(member); // 중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    /** 전체 회원 조회 **/
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(long memberId) {
        return memberRepository.findById(memberId);
    }
}
